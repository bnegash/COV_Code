# -----------------------------------| Imports |-------------------------------------|
import pyodbc
from tkinter import *
from tkinter import messagebox
import tkinter
from tkinter import ttk
from tkinter.ttk import *
import sys
from turtle import width


# ----------------------------------| Debugging |-------------------------------------|
def log(x):
    logging_enabled = False
    if logging_enabled == True:
        print(x)


# -----------------------------------| GUI |----------------------------------------|
window = Tk()
window.title("Update Tel")
window.geometry("350x300")
# window.iconbitmap('itlogo_icon.ico')
window.resizable(width=False, height=False)


# Confirmation Window, Used before submitting changes to different scripts
# About Window
def success_popup():
    success_window = Toplevel(window)
    success_window.geometry("280x250")
    success_window.title("Success!")
    # success_window.iconbitmap('itlogo_icon.ico')
    success_window.resizable(width=False, height=False)

    # Display information in the success popup
    Label(success_window, text="Tel Directory Has Been Updated!", font="Verdana 12 underline").grid(row=0, column=0,
                                                                                                    pady=10,
                                                                                                    columnspan=2)
    Label(success_window, text=f"Full Name:     {full_name_var.get()}").grid(row=1, column=0, sticky=W, padx=5, pady=10)
    Label(success_window, text=f"Extension:     {extension_var.get()}").grid(row=2, column=0, sticky=W, padx=5, pady=10)
    Label(success_window, text=f"Direct Line:   {direct_var.get()}").grid(row=3, column=0, sticky=W, padx=5, pady=10)
    Label(success_window, text=f"Location:      {location_var.get()}").grid(row=4, column=0, sticky=W, padx=5, pady=10)

    # Function to clear the form entries in the main window and close the success window
    def clear_main_form(event=None):
        clear_form()  # Clear the form entries in the main window
        success_window.destroy()  # Close the success window

    # Bind the clear_main_form function to the Destroy event of the success window
    success_window.bind("<Destroy>", clear_main_form)

    close_button = tkinter.Button(success_window, text="Close", width=25, bg='blue', fg='white',
                                  command=clear_main_form)
    close_button.grid(row=5, column=0, padx=5, pady=10)


# Function to handle the database query and displaying the success popup
def run_query():
    # conn = pyodbc.connect(r"Driver={Microsoft Access Driver (*.mdb, *.accdb)};DBQ=\\app1\phone\phonelist.mdb;")
    conn = pyodbc.connect(r"Driver={Microsoft Access Driver (*.mdb, *.accdb)};DBQ=D:\phone db\phone db\phonelist.mdb;")
    # "D:\phone db\phone db\phonelist.mdb"
    cursor = conn.cursor()
    log(f"Extension to check: {extension_var.get()}")
    if extension_var.get() == "" or full_name_var.get() == "" or location_var.get() == "":
        log("Not enough Values")
    else:
        # If direct_var is empty, replace it with a space
        if direct_var.get() == "":
            direct_var.set(" ")

        cursor.execute(f"SELECT * FROM tblphone WHERE extension = '{extension_var.get()}'")
        result_check = cursor.fetchone()

        if result_check is None:
            cursor.execute(
                f"INSERT INTO tblphone (Name,Extension,DID,Location) VALUES ('{full_name_var.get()}','{extension_var.get()}','{direct_var.get()}','{location_var.get()}')")
            log("Insert New Record Query")
            cursor.commit()
        else:
            cursor.execute(
                f"UPDATE tblphone SET Name = '{full_name_var.get()}', DID = '{direct_var.get()}' , Location = '{location_var.get()}' WHERE Extension = '{extension_var.get()}'")
            log("Insert New Record Query")

        cursor.commit()
        success_popup()


# Clear form entries function
def clear_form():
    full_name_var.set(" ")
    extension_var.set(" ")
    direct_var.set(" ")
    location_var.set(" ")


# Labels / Buttons
# User Info
full_name_var = StringVar()
extension_var = StringVar()
direct_var = StringVar()
location_var = StringVar()

Label(window, text="Update Tel Directory", font="Verdana 12 underline").grid(row=0, column=0, pady=10, columnspan=2)
Label(window, text="Full Name*").grid(row=1, column=0, sticky=W, padx=5, pady=10)
Entry(window, width=20, textvariable=full_name_var).grid(row=1, column=1, sticky=W)
Label(window, text="Main Extension*").grid(row=2, column=0, sticky=W, padx=5, pady=10)
Entry(window, width=20, textvariable=extension_var).grid(row=2, column=1, sticky=W)
Label(window, text="Direct Line (with prefix:  826-3610)").grid(row=3, column=0, sticky=W, padx=5, pady=10)
Entry(window, width=20, textvariable=direct_var).grid(row=3, column=1, sticky=W)
Label(window, text="Location or Department*").grid(row=4, column=0, sticky=W, padx=5, pady=10)
Entry(window, width=20, textvariable=location_var).grid(row=4, column=1, sticky=W)
Label(window, text="* are Required Fields").grid(row=5, column=0, sticky=W, padx=5, pady=15)

# Submit Entries
color_button = tkinter.Button
color_button(window, text="Submit", width=25, bg='blue', fg='white', command=run_query).grid(row=40,
                                                                                             column=0,
                                                                                             pady=15,
                                                                                             columnspan=2)

# Create Windows & Main Loop
mainloop()
