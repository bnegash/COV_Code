while ($true) {
    Clear-Host
    Write-Host "Kill Task Script" -ForegroundColor "yellow"
    Write-Host "================" -ForegroundColor "yellow"
    Write-Output "`n"

    # Ask for device name or IP
    $device = Read-Host -Prompt "Enter a device name or IP"

    #Test if the connection to remote machine is successful
    $pingable = Test-Connection -ComputerName $device -Count 1 -ErrorAction
    if(-not $pingable){
        Write-Host "Unable to connect to $device. Check the machine name or IP." -ForegroundColor "red"
        exit
    }
    else
    {
        Write-Host "Successfully connected to $device" -ForegroundColor "green"
    }
    Write-Output "`n"

    while ($true) {
        Write-Host "Options:"
        Write-Host "C) List common apps that freeze"
        Write-Host "L) List all running processes"
        Write-Host "K) Enter a process to kill"

        # Prompt user for their choice
        $user_option = Read-Host -Prompt "Select an option"
        Write-Output "`n"

        switch ($user_option) {
            "C" {
                # Display common apps to kill and allow the user to select
                Write-Host "Common Apps to Kill" -ForegroundColor "yellow"
                Write-Host "===================" -ForegroundColor "yellow"
                Write-Host "1) Chrome"
                Write-Host "2) Explorer"
                Write-Host "3) Outlook"
                Write-Host "4) Snipping Tool"
                $task_kill_option = Read-Host -Prompt "Enter the number of the task to kill"

                switch ($task_kill_option) {
                    "1" {
                        Write-Host "Killing Chrome..."
                        $task_kill = "chrome.exe"
                    }

                    "2" {
                        Write-Host "Killing Explorer..."
                        $task_kill = "explorer.exe"
                        taskkill /s $device /t /f /im $task_kill
                        Start-Sleep -Seconds 3
                        Write-Host "Restarting explorer..."
                        Start-Process "explorer.exe"
                    }

                    "3" {
                        Write-Host "Killing Outlook..."
                        $task_kill = "outlook.exe" }

                    "4" {
                        Write-Host "Killing explorer..."
                        $task_kill = "snippingtool.exe" }

                    default { $task_kill = Read-Host -Prompt "Enter the name of the task to kill" }
                }
                Write-Host "Killing $task_kill..."
                taskkill /s $device /t /f /im $task_kill
            }
            "L" {
                # List all running processes
                tasklist -s $device | Sort-Object
            }
            "K" {
                # Allow the user to manually enter a task name to kill
                while ($true) {
                    $task_kill = Read-Host -Prompt "Enter the name of the task to kill"
                    Write-Host "Killing $task_kill..."
                    taskkill /s $device /t /f /im $task_kill
                    $kill_more = Read-Host -Prompt "Kill another task? (y/n): "
                    if ($kill_more -eq "n" -or $kill_more -eq "N") {
                        break
                    }
                }
            }
            default {
                Write-Host "Invalid option. Please select a valid option."
            }
        }

        # Ask if the user wants to perform more actions on the current device
        $continue = Read-Host -Prompt "Perform more actions on this device? (y/n): "
        if ($continue -eq "n" -or $continue -eq "N") {
            break
        }
    }

    # Ask if the user wants to work with another device
    $user_retry = Read-Host -Prompt "Enter another device? (y/n): "
    if ($user_retry -eq "n" -or $user_retry -eq "N") {
        exit
    }
}
