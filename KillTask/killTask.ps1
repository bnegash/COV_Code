while($true){
    Clear-Host
    write-host "Kill Task Script" -foregroundcolor "yellow"
    write-host "_________________" -foregroundcolor "yellow"
    write-output "`n"
    $device = Read-Host -Prompt "Enter a device name or IP"
    while($true){
        $user_option = Read-Host -Prompt "Enter 'C' to list common apps to kill"  
	    $user_option = Read-Host -Prompt "Type L to list all running processes, or K enter a process to Kill"
        
        # Checks if user input is to list common apps to kill
        if(($user_option -eq "C") -or ($user_option -eq "c")){
		    while($true){
                # Displays common apps
		    	write-host "Common Apps to Kill"
		    	write-host "____________________"
		    	write-host "1 Chrome "
			    write-host "2 Explorer "
			    write-host "3 Outlook "
			    write-host "4 Snipping Tool "
                $task_kill = Read-Host -Prompt "Enter the number of the task to kill"
                taskkill /s $device /t /f /im $task_kill
            }
        }
            if(($user_option -eq "L") -or ($user_option -eq "l")){
                tasklist -s $device | Sort-Object
            }
            # Checks if user 
            if(($user_option -eq "K") -or ($user_option -eq "k")){
                while($true){
                $task_kill = Read-Host -Prompt "Enter name of the task to kill"
                taskkill /s $device /t /f /im $task_kill
                $kill_more = Read-Host  -Prompt "Kill another task?(y/n):  "
                    if(($kill_more -eq "n") -or ($kill_more -eq "N")){
                        break
                    }
                }
            }
    }
    $user_retry = Read-Host -Prompt "Enter Another Device?(y/n):  "
        if($user_retry -eq "n"){
            exit
        }
    
}
