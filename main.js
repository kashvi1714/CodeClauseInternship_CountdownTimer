// Setiing End Date for CountDown
let theDay = new Date("Apr 21, 2024 12:00:00").getTime();

// Setting timer to tick every second
let timer= setInterval(change,1000);

function change(){
    // getting current time
    let now= new Date().getTime();

    // getting the difference in time to get time left until reaches 0

     let t= theDay-now;

    //  checking if the time is above 0
    if (t>0){
        // setting Days, hours, minutes and seconds
        let days= Math.floor(t / (1000*60*60*24));
        if (days<10){
            days="0"+days;
        }

        let hours = Math.floor((t % (1000*60*60*24)) / (1000*60*60));
        if (hours < 10){
            hours="0" +hours;
        }

        let minute = Math.floor ((t % (1000*60*60 ))/ (1000*60));
        if (minute < 10){
            minute ="0"+ minute
        }

        let second = Math.floor(( t % (1000*60))/ (1000));
        if(second < 10){
            second="0"+second
        }

        // creating time string
        let time= `${days} DAYS : ${hours} HRs : ${minute} MIN : ${second} SEC`;

        // setting time on document
        document.querySelector('.timer').innerText=time;
    }
}