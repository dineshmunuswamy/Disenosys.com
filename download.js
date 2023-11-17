document.getElementById('sampleForm').addEventListener('submit', function (e) {
    e.preventDefault();

    setTimeout(function () {

        downloadFile();
    }, 1000);
});

function downloadFile() {
    // Create an anchor element
    var downloadLink = document.createElement('a');
    downloadLink.href = './1-02.png';
    downloadLink.download = 'downloaded_file.txt';
    downloadLink.style.display = 'none';

 
    document.body.appendChild(downloadLink);

  
    downloadLink.click();


    document.body.removeChild(downloadLink);
}