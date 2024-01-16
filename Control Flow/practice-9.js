// Write a loop that prints numbers from 1 to 10 but skips the number 5 and stops at 8.

for (let i = 1; i <= 10; i++) {
   if(i === 5) 
    continue

    else if (i > 8)
    break

    console.log(i)
}