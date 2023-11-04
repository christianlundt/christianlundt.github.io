// Load the footer content using JavaScript
        fetch('/common/navbar.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('navbar-placeholder').innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading footer: ' + error);
            });