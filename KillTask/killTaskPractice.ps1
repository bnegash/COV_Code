$commonApps = [ordered]@{
    "1" = "Chrome"
    "2" = "Explorer"
    "3" = "Outlook"
    "4" = "Snipping Tool"
}
while ($true) {
    Clear-Host
    write-host "Kill Task Script" -foregroundcolor "yellow"
    write-host "_________________" -foregroundcolor "yellow"
    write-host "Press q to quit"
    $device = Read-Host -Prompt "Enter a device name or IP"

    while ($true) {
        if($user_option -eq "q"){
            exit
        }else{
            $user_option = Read-Host -Prompt "Enter 'C' to list common apps to kill"
            if (($user_option -eq "C") -or ($user_option -eq "c")) {
                <# Action to perform if the condition is true #>
                $commonApps
                $task = Read-Host -Prompt "Enter the number of the task to kill"
                $commonApps.values = $task
                Write-host $task
            }
        }
        
        
    }
    
}
