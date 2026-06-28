#!/usr/bin/env python3
"""
GitHub Actions Usage Monitor for TheHGTech
Tracks workflow run times and alerts on usage thresholds

This script:
1. Logs each workflow run duration
2. Calculates monthly usage estimates
3. Alerts when approaching limits
4. Provides usage reports
"""

import json
import os
from datetime import datetime, timedelta
from pathlib import Path

# Configuration
USAGE_LOG_FILE = "data/github-actions-usage.json"
MONTHLY_LIMIT_MINUTES = 2000  # GitHub Free tier

# Alert thresholds
THRESHOLDS = {
    "normal": 0.50,    # < 50% = Green
    "warning": 0.75,   # 50-75% = Yellow
    "critical": 0.90   # > 75% = Red
}

# Workflow run time estimates (in seconds)
WORKFLOW_ESTIMATES = {
    "threat-intel": 180,      # ~3 minutes
    "ransomware": 60,         # ~1 minute
    "update-shorts": 120,     # ~2 minutes
    "weekly-report": 60       # ~1 minute
}


def load_usage_log() -> dict:
    """Load existing usage log or create new one"""
    if os.path.exists(USAGE_LOG_FILE):
        with open(USAGE_LOG_FILE, 'r') as f:
            return json.load(f)
    
    return {
        "version": "1.0",
        "created": datetime.now().isoformat(),
        "monthlyLimit": MONTHLY_LIMIT_MINUTES,
        "currentMonth": datetime.now().strftime("%Y-%m"),
        "runs": [],
        "dailyStats": {},
        "alerts": []
    }


def save_usage_log(data: dict):
    """Save usage log to file"""
    os.makedirs(os.path.dirname(USAGE_LOG_FILE), exist_ok=True)
    with open(USAGE_LOG_FILE, 'w') as f:
        json.dump(data, f, indent=2)


def log_workflow_run(workflow_name: str, duration_seconds: int = None, 
                      status: str = "success"):
    """
    Log a workflow run
    
    Args:
        workflow_name: Name of the workflow
        duration_seconds: Actual duration (or estimated if None)
        status: "success" or "failure"
    """
    data = load_usage_log()
    
    # Use estimate if no duration provided
    if duration_seconds is None:
        duration_seconds = WORKFLOW_ESTIMATES.get(workflow_name, 120)
    
    duration_minutes = round(duration_seconds / 60, 2)
    
    # Create run entry
    run = {
        "timestamp": datetime.now().isoformat(),
        "workflow": workflow_name,
        "durationSeconds": duration_seconds,
        "durationMinutes": duration_minutes,
        "status": status
    }
    
    data["runs"].append(run)
    
    # Update daily stats
    today = datetime.now().strftime("%Y-%m-%d")
    if today not in data["dailyStats"]:
        data["dailyStats"][today] = {
            "totalMinutes": 0,
            "runCount": 0,
            "workflows": {}
        }
    
    data["dailyStats"][today]["totalMinutes"] += duration_minutes
    data["dailyStats"][today]["runCount"] += 1
    
    if workflow_name not in data["dailyStats"][today]["workflows"]:
        data["dailyStats"][today]["workflows"][workflow_name] = {
            "runs": 0,
            "minutes": 0
        }
    data["dailyStats"][today]["workflows"][workflow_name]["runs"] += 1
    data["dailyStats"][today]["workflows"][workflow_name]["minutes"] += duration_minutes
    
    # Check thresholds and generate alerts
    monthly_usage = calculate_monthly_usage(data)
    check_thresholds(data, monthly_usage)
    
    save_usage_log(data)
    
    return monthly_usage


def calculate_monthly_usage(data: dict) -> dict:
    """Calculate current month's usage statistics"""
    current_month = datetime.now().strftime("%Y-%m")
    
    total_minutes = 0
    run_count = 0
    workflow_breakdown = {}
    
    for date, stats in data["dailyStats"].items():
        if date.startswith(current_month):
            total_minutes += stats["totalMinutes"]
            run_count += stats["runCount"]
            
            for wf_name, wf_stats in stats.get("workflows", {}).items():
                if wf_name not in workflow_breakdown:
                    workflow_breakdown[wf_name] = {"runs": 0, "minutes": 0}
                workflow_breakdown[wf_name]["runs"] += wf_stats["runs"]
                workflow_breakdown[wf_name]["minutes"] += wf_stats["minutes"]
    
    usage_percent = (total_minutes / MONTHLY_LIMIT_MINUTES) * 100
    
    # Project end-of-month usage based on current rate
    days_in_month = 30  # Approximation
    days_elapsed = datetime.now().day
    if days_elapsed > 0:
        projected_usage = (total_minutes / days_elapsed) * days_in_month
    else:
        projected_usage = 0
    
    return {
        "month": current_month,
        "totalMinutes": round(total_minutes, 2),
        "runCount": run_count,
        "limit": MONTHLY_LIMIT_MINUTES,
        "usagePercent": round(usage_percent, 1),
        "remainingMinutes": round(MONTHLY_LIMIT_MINUTES - total_minutes, 2),
        "projectedMonthEnd": round(projected_usage, 2),
        "projectedPercent": round((projected_usage / MONTHLY_LIMIT_MINUTES) * 100, 1),
        "workflowBreakdown": workflow_breakdown
    }


def check_thresholds(data: dict, usage: dict):
    """Check if usage exceeds thresholds and create alerts"""
    usage_ratio = usage["totalMinutes"] / MONTHLY_LIMIT_MINUTES
    
    if usage_ratio >= THRESHOLDS["critical"]:
        level = "CRITICAL"
        message = f"⚠️ CRITICAL: GitHub Actions usage at {usage['usagePercent']}% of monthly limit!"
    elif usage_ratio >= THRESHOLDS["warning"]:
        level = "WARNING"
        message = f"🟡 WARNING: GitHub Actions usage at {usage['usagePercent']}% of monthly limit"
    else:
        level = "NORMAL"
        message = None
    
    if message:
        alert = {
            "timestamp": datetime.now().isoformat(),
            "level": level,
            "message": message,
            "usage": usage
        }
        data["alerts"].append(alert)
        print(message)
    
    return level


def generate_usage_report() -> str:
    """Generate a human-readable usage report"""
    data = load_usage_log()
    usage = calculate_monthly_usage(data)
    
    report = []
    report.append("=" * 60)
    report.append("📊 GitHub Actions Usage Report - TheHGTech")
    report.append("=" * 60)
    report.append(f"Month: {usage['month']}")
    report.append(f"Generated: {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    report.append("")
    
    # Usage bar
    bar_length = 40
    filled = int((usage['usagePercent'] / 100) * bar_length)
    bar = "█" * filled + "░" * (bar_length - filled)
    
    report.append(f"Usage: [{bar}] {usage['usagePercent']}%")
    report.append(f"Minutes Used: {usage['totalMinutes']} / {usage['limit']}")
    report.append(f"Remaining: {usage['remainingMinutes']} minutes")
    report.append("")
    
    # Status indicator
    if usage['usagePercent'] < 50:
        status = "🟢 HEALTHY"
    elif usage['usagePercent'] < 75:
        status = "🟡 MODERATE"
    else:
        status = "🔴 HIGH"
    
    report.append(f"Status: {status}")
    report.append(f"Projected Month-End: {usage['projectedPercent']}%")
    report.append("")
    
    # Workflow breakdown
    report.append("Workflow Breakdown:")
    report.append("-" * 40)
    for wf_name, wf_stats in usage['workflowBreakdown'].items():
        report.append(f"  {wf_name:20} {wf_stats['runs']:3} runs  {wf_stats['minutes']:.1f} min")
    
    report.append("")
    report.append("=" * 60)
    
    return "\n".join(report)


def main():
    """Generate and print usage report"""
    print(generate_usage_report())


if __name__ == "__main__":
    main()
