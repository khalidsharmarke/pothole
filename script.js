    // Database
    const Accounts = {
        administrator: {
            username: "admin",
            password: "Master",
            badPasswords: 0,
        },
        guest: {
            username: "guest",
            password: "guest",
            badPasswords: 0,
        }
    }
    // Server
    let loggedInStatus = {
        loggedIn: false,
        badUsername: 0,
        pageLocked: function() {
            if (this.badUsername == 3) {
                return true
            } else {
                return false
            }
        },
        account: {
            fullDetails: undefined,
            name: undefined,
            badPasswords: undefined,
            locked: function() {
                if (this.badPasswords >= 3) {
                    return true
                } else {
                    return false
                }
            }
        },
    }

    function verifyUser() {
        if (loggedInStatus.account.name == undefined) {
            let username = prompt(`Username:`);
            if (username == null) {
                return null;
            } else {
                for (account in Accounts) {
                    if (username === Accounts[account].username) {
                        let interimHolder = {};
                        interimHolder[account] = Accounts[account];
                        loggedInStatus.account = interimHolder;
                        break;
                    }
                }
            }
        }
        if (loggedInStatus.account.name == undefined) {
            loggedInStatus.badUsername += 1;
        } else {
            checkPassword(loggedInStatus.account.name);
        }
    }

    function checkPassword(accName) {
        if () {
            let password = prompt('Password:');
            if (password == null) {
                return null;
            } else if (password === accName.password) {
                loggedInStatus.loggedIn = true;
                alert("you are now logged in");
                //change log in button to the user's Account name;
            } else {
                accName.badPasswords += 1;
                return
            }
        }
    }

    // Front-End
    function logIn() {
        while (loggedInStatus.loggedIn == false) {
            if (loggedInStatus.pageLocked == true) {
                alert("you are locked");
                break;
            } else {
                let x = verifyUser();
                if (x == null) {
                    break;
                }
            }
        }
    }

    function addPothole() {
        // to check if something exists, check if (!undefined);
        if (loggedInStatus.loggedIn == false) {
            alert("you must be logged in to add a pothole!");
            return
        } else {
            document.getElementById('potholeList').appendChild(new PotholeEntry(prompt("Name your new Pothole")));
        }
    }

    function PotholeEntry(string) {
        this.name = string;

        let ph = document.createElement('li');
        ph.className = "potholeEntries";
        ph.textContent = this.name;

        // can't make a button that remove the whole element
        // can make button that only deletes iteslf
        //       let delPH = document.createElement('button');
        //       delPH.onclick = this.remove();
        //       delPH.textContent = "del";

        // this.delEntry = function(){
        //       	this.remove();
        //       }

        //       ph.appendChild(delPH);
        return ph;
    }

    function delEntry() {


        delPH.addEventListener('click', function() {
            this.delEntry;
        })
    }
