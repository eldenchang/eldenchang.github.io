---
layout: page
title: About
permalink: /about/
---

This is the base Jekyll theme. You can find out more info about customizing your Jekyll theme, as well as basic Jekyll usage documentation at [jekyllrb.com](http://jekyllrb.com/)

You can find the source code for the Jekyll new theme at:
{% include icon-github.html username="jglovier" %} /
[jekyll-new](https://github.com/jglovier/jekyll-new)

You can find the source code for Jekyll at
{% include icon-github.html username="jekyll" %} /
[jekyll](https://github.com/jekyll/jekyll)

---
---
#Overview#

This exercise will familiarize you with some file operations.
You are not allowed to store the contents of the file in an array.
All operations must be performed on the file.

---



#Learning Goals#

(1) To learn how to open and close a file
(2) To learn how to use fgetc to obtain a character from a file
    and to use fputc to put a character to a file
(3) To learn to go to a particular location of a file using
    fseek
(4) To learn to create your own Makefile

---


#Submitting Your Assignment#

You must submit two files:

(1) answer07.c
(2) Makefile

Use the following command to create a zip file and
submit the zip file through Blackboard.
 
	> zip PE07.zip answer07.c Makefile

---


#Overview#

This exercise will give you more practice with file operations.
It will also prepare you for the next programming assignment PA03.

You are responsible for "solving" a maze problem in PA03.  In particular,
you are responsible for designing a program that would allow an agent
air-dropped into a maze to find the shortest path to reach a destination 
location in the maze.  In this exercise, you will write functions to:

(1)  Determine the dimensions of the maze. (2 points)
(2)  Find the column location of the openings. (2 points)
(3)  Count the number of locations that are PATH. (2 points)
(4)  Given the row and column coordinates, determine whether that
     location is WALL or PATH. (2 points)
(5)  Re-represent the maze in a single line in a new file (2 points).  

More details of the functions are provided below.

---


#Input file format#

In this exercise, we are concerned with only rectangular mazes.
A maze is made up of r rows and c columns.  For example, the
input file which contains the following lines describes
a maze with r = 7 and c = 9:

	XXXXX XXX
	X       X
	XXXXX X X
	X     X X
	XXXXXXX X
	X       X
	XXXXX XXX

Note that in the input file, it would contain exactly 7 lines.
Moreover, there is a newline `'\n'` character at the end of each line.
Therefore, there are really 10 characters in each line (9 '`X`' or '` `'
+ 1 newline '`\n`').

We number the rows from top to bottom as row 0 through row 6,
and the columns from left to right as column 0 through column 8.
This maze is in the file `sample.2.7x9`.

An executable "amaze" is provided for you to generate other
test cases.  To generate a maze with (2r + 1) rows and
(2c+1) columns, where r and c <= 69, issue the following command:

	> ./amaze r c X > sample

where sample is the name of the file to store the generated maze.
Note that amaze outputs the maze to the stdout, but the redirection
'>' redirects the sreen output to a file called "sample".

You may assume that the file pointer contains a valid maze,
and that it has been successfully opened for read operations. 
However, you may not assume that the file location indicator
is at the beginning of a file.  Also, you should not close the given
file pointer in any of these five functions.  However, if you open
another file in your function, you are responsible for closing that
file.  We will use valgrind to make sure that you close all files
that you have opened.  **Failure to close a file you have opened will
result in a 50% penalty.**

---


#Functions to be written (10 points)#

The first function should determine the number of rows and the number
of columns of a given maze.  For example, we have 7 rows and 9 columns.
The parameters *nrow and *ncol should store 7 and 9, respectively.

The second function should find the locations of the openings.
One opening is always in row 0 and the other opening is always in
row (r-1).  Therefore, all you have to do is find the column at which
the top opening occurs.  For this example, the opening is at column
5.

The third function counts the number of locations that are `PATH` (or
'` `', character space).  You should include the openings in your count.
For this example, there are 25 locations that are PATH.

The fourth function has to determine whether the location specified
by given the row-column coordinates is a `PATH` or `WALL`.
For example, at location (1, 1), we have `PATH`.  At location (2, 2),
we have WALL.  The given coordinates will always be valid.  You 
simply have to return the character ('X' or ' ') at that location.

The fifth function has to re-represent the maze in a single line
in a new file.  For this example, the file should look like this:

	XXXXX XXXX       XXXXXX X XX     X XXXXXXXX XX       XXXXXX XXX

There should be exactly 7*9 = 63 characters in the output file.  In other
words, there is no newline character at the end of the file. 
This one-line representation is in the file newsample.2.7x9.

These functions should be written in answer07.c.  A brief description
of these functions can be found in answer07.h.   

---


#Makefile (2 points)#

You will have to write a main function so that you can test these
five functions.  However, you SHOULD write the main function in
a separate file called `pe07.c`.  If you include the main function 
in answer07.c, we will not be able to compile your `answer07.c`,
and you will get zero for this exercise.  

The main function that the instructor will write also 
resides in `pe07.c`.  The following gcc command will be used for
compilation:

	gcc -Wall -Werror -Wshadow -g pe07.c answer07.c -o pe07

You should write a Makefile so that you can compile
using the make command.  Model your Makefile after the Makefile
you have used in `PE04`/`PE05`/`PE06`/`PA02`.

We will use your submitted Makefile and our own Makefile to
compile your code.  If you code does not compile (by your Makefile
or by our Makefile), you will get zero for this exercise.

---


#Warnings#

We will be calling these five functions in unpredictable fashion.
You cannot assume that the given file pointer will point at 
a particular location in the file.  If you do not set the file position
properly at the beginning of the function call, it is unlikely that you 
will pass any of our tests.  

Do not close the given file pointer in any of these functions.
However, you have to close files that you have opened in your functions.

Do not print error messages to stdout.  If you want to print error messages,
print them to stderr.
