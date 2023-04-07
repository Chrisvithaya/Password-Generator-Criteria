# Password-Generator-Criteria


## Description

Our instructor Farish provided a template outline to get us started with this week's challenge.
One thing I realized in the if statement, we are concating the wrong variables.
In the provided code, it was using a boolean variables instead of our characters arrays.

Instead of concating the boolean variables into our 'possiblePasswordChars' I changed it to the charachters array for special characters, lowercase, uppercase, and numbers.
I also deleted the codes in the if statements that were generating the random char.
I deleted this because we only need to generate a random char when we iterate through our password length.

I also wrote a While loop to handle data validation for the user inputing a number between 8-128. While the boolean isValid is false, then keep running the code. If the passwordNum is between 8-128, change the isValid to true and it will let us break out of the loop.

I also changed the forloop condition to 'i < parseInt(passwordLength)' because we needed to generate multiple random char to match the user's wanted password length and also because 'passwordLength' is a string.
At the end of the generatePassword function, I return password because in the writePassword function, there is a var that is saving the return data of generatePassword function.

In the writePassword function, I used the .join method to join the randomPassword array into a string.

