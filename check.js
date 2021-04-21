let num;
num=parseInt(prompt("Enter any number"));
if(num<0)
{
    console.log(num+" is negative number");
}
else if(num>0)
{
    console.log(num+" is positive number");
}
else if(num==0)
{
    console.log(num+" is zero")
}
else{
    console.log("Please enter any number");
}