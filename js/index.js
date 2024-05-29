
var quotes = [
    { quote:"“Be yourself; everyone else is already taken.”" ,
    author:"Oscar Wilde" },
    {
        quote:"“The only way to do great work is to love what you do.”",
        author:"Steve Jobs"
    },
    {
        quote:"“Believe you can and you,re halfway there.”",
        author:"Steve Jobs"      
    },
    {
        quote:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        author:"Marilyn Monroe"
    },
    {
        quote:"“The greatest glory in living lies not in never falling, but in rising every time",
        author:"Oscar Wilde"
    },
    {
        quote:"“Do something today that your future self will thank you for.”",
        author:"Unknown"
    },
    {
        quote:"“Happiness can be found even in the darkest of times if one only remembers to",
        author:"Albus Dumbledore"
    },
    {
        quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        author:"Dr. Seuss"
    },
    {
        quote:"“You miss 100% of the shots you don't take.”",
        author:"Wayne Gretzky"
    }
    
];


var lastGeneratedNumber = '';
var arrNumber = [];
function displayQuotes(){
    
    do{
        var newGeneratedNumber = Math.floor(Math.random()*quotes.length) 
    }while (newGeneratedNumber == lastGeneratedNumber ||arrNumber.includes(newGeneratedNumber));
    lastGeneratedNumber =  newGeneratedNumber;
    arrNumber.push(lastGeneratedNumber);
    console.log(arrNumber);
    document.getElementById("quotes").innerHTML = quotes[newGeneratedNumber].quote
    document.getElementById("author").innerHTML = quotes[newGeneratedNumber].author
   

}