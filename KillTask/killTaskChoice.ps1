$commonApps = @{
    "1" = "chrome.exe"
    "2" = "explorer"
    "3" = "outlook"
    "4" = "Snipping Tool"
}
$taskList = Get-Process | Where-Object { $commonApps.containsvalue($_.Name) }

Clear-Host
write-host "Kill Task Script" -foregroundcolor "yellow"
write-host "_________________" -foregroundcolor "yellow"
write-host "Press q to quit"
$device = Read-Host -Prompt "Enter a device name or IP"
$user_option = Read-Host -Prompt "Enter 'C' to list common apps to kill"

if (($user_option -eq "C") -or ($user_option -eq "c")) {
    <# Action to perform if the condition is true #>

    write-host "List of common apps to kill:"
    $commonApps.GetEnumerator() | ForEach-Object {
        Write-Host "$($_.Key). $($_.Value)"
    }

    $choice = Read-Host -Prompt "Enter the number of the task to kill"
    
    if($commonApps.ContainsKey($choice)){
        $taskToKill = $taskList | Where-Object{$_.Name -eq $commonApps[$choice]}
        Write-Host "You chose: $taskToKill"
    } else{
        Write-Host "Invalid Choice"
    }
}

   
