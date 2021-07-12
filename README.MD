https://www.codewars.com/kata/5a1463678ba9145a670000f9

The "Berlin Clock" is the first public clock in the world that tells the time by means of illuminated, coloured fields, for which it entered the Guinness Book of Records upon its installation on 17 June 1975.

alt text

The clock is read from the top row to the bottom. The top row of four red fields denote five full hours each, alongside the second row, also of four red fields, which denote one full hour each, displaying the hour value in 24-hour format. The third row consists of eleven yellow-and-red fields, which denote five full minutes each (the red ones also denoting 15, 30 and 45 minutes past), and the bottom row has another four yellow fields, which mark one full minute each. The round yellow light on top blinks to denote even- (when lit) or odd-numbered (when unlit) seconds.

Example: Two fields are lit in the first row (five hours multiplied by two, i.e. ten hours), but no fields are lit in the second row; therefore the hour value is 10.
Six fields are lit in the third row (five minutes multiplied by six, i.e. thirty minutes), while the bottom row has one field on (plus one minute). Hence, the lights of the clock altogether tell the time as 10:31. (Source: Wikipedia)

Task: Write a function that takes in a particular time as 24h format ('hh:mm:ss') and outputs a string that reproduces the Berlin Clock. The parameters should be as follows:

“O” = Light off
“R” = Red light
“Y” = Yellow light

Example Test Case:
Input String:
12:56:01

Output String:
O
RROO
RROO
YYRYYRYYRYY
YOOO

Please check the example test cases for the required output format.


---
# Rules

- test suite: must replace the kata description
- test first always.
- tech debt backlog
- don't create a Rambo swiss knife...
- strict with the 3 laws of TDD
  - red tests = git commit
  - green test = git commit
  - refactor = git commit
- code & test code must be writte as a narrative book --> plain english


### Initial case

1. Input - 23:24:02 - valid input
  - 2343 - invalid string
  - "2323" - invalid input
  - no value - invalid input
  - 23:24:02 - valid input
  - 56:24:02 - invalid input
  
2. Seconds Light
  - even - lit
  - odd - unlit

3. Hours Lights
  - top hours light represent 5 hours each
      02:30:45 - OOOO
      05:30:45 - ROOO
      10:10:10 - RROO
      16:10:10 - RRRO
      20:56:34 - RRRR

  - bottom hours light represent 1 hour each
      02:30:45 - RROO
      05:30:45 - ROOO
      10:10:10 - OOOO
      16:10:10 - ROOO
      23:56:34 - RRRO

4. Minutes Lights
  - top minutes light represent 5 minutes each (on yellow) but each 15 minutes its red
      02:30:45 - YYRYYROOOOO
      10:10:10 - YYOOOOOOOOO
      16:56:56 - YYRYYRYYRYY
      23:02:02 - OOOOOOOOOOO

  - bottom minutes light represent 1 minute each 
      02:34:45 - YYYY
      10:02:10 - YYOO
      16:59:56 - YYYY
      23:00:02 - OOOO

5. Return full String of hour representation
  - 12:56:01 - O\nRROO\nRROO\nYYRYYRYYRYY\nYOOO
  - 02:30:45 - O\nOOOO\nRROO\nYYRYYROOOOO\nOOOO
  - aa:bb:cc - Error