
let string_1 = "";
for (let i=0; i<5; i++) {
    for (let j=0; j<=i; j++) {
        string_1 += "*";
    }
    string_1 += "\n";
}
console.log(string_1);

//Hollow  star ptrn

let string_2="";
for (let i=0; i<5; i++)
{
    for (let j=0; j<=i; j++)
    {
        if (i=1 || i<=4)
        {
            string_2 += "";
        }
        else
        {
            string_2 += "*";
        }
    }
    string_2 += "\n";
}
console.log(string_2);


