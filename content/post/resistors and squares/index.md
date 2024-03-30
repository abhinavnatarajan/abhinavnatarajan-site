---
title: Resistors and Squares
summary: Two puzzles from MathsJam 2022
tags: ['puzzles', 'induction']
show_date: true
date: 22 Nov 2022
type: post
---
[Colin Beveridge](https://blog.flyingcoloursmaths.co.uk/) posed two fun teasers at his talk at the [MathsJam 2022](https://www.solipsys.co.uk/cgi-bin/MJ_Wiki.py) gathering in the UK. These were:
1. For what values of $n$ can $n$ resistors, each of resistance 1$\Omega$, be assembled into an effective resistance of 1$\Omega$? Current much pass through every resistor in the resulting configuration. 
2. For what values of $n$ can a square be partitioned into $n$ squares? The sub-squares need not all be the same size. 

I quite enjoyed solving these problems, so I'm going to write down my solution to these problems here. 

<details>
<summary>Click to reveal solutions</summary>

## The first problem 
Let us set up notation to make things easier. If $x$ and $y$ are configurations of resistors, let $x+y$ denote the configuration  with $x$ and $y$ in series (which for us is an abelian operation since we only care about the effective resistance) and let $x || y$ be the configuration obtained by placing $x$ and $y$ in parallel with each other. As shorthand, let $nx$ denote $\sum_1^n x$ and let $x/n$ denote $x\ || \ldots ||\ x$ ($n$ times). Let $[1]$ denote the configuration with a single resistor. Let us call $n$ a *good* number if the problem can be solved for $n$ resistors. It is tempting to try to find a general inductive scheme through which we can hop from smaller $n$ to larger $n$, so that is what we are going to do.
1. $n^2$ is good for all $n$, since we can use the configuration $n([1]/n)$. 
2. If $n$ and $m$ are good with configurations $x$ and $y$, then $n + m - 1$ is good since we can replace any reisistor in $x$ with all of $y$. By iterating this, we see that $nm$ is good. 
3. By (1), 4 is good. This means that if $n$ is good then $n+3$ is good by (2). 
4. Combining the previous points, all numbers of the form $3k + 1$ are good (for $k \geq 0$) since 1 is good.
5. Since $9$ is good (by (1)), all multiples of 3 that are $\geq 9$ are good by (3). 
6. All even numbers $\geq 4$ are good. This one takes some trial and error to stumble upon. The configuration required is [1]/k + (1 || (k-1)[1]) for any $k \geq 1$, and this configuration uses $2k$ resistors. The route to working it out for me was to see that $1 || k[1]$ had an effective resistance of $k/(k+1)$ ohms. All that is left to make it one ohm is a resistancce of $1 / (k+1)$ ohms, which is easily achieved through $k+1$ resistors in parallel. 
7. Using the above, we also have that 8 is good. This means that every number of the form $3k + 2$ that is $\geq 8$ is good (again using (3)). 
8. We are ony left with 2, 3, and 5 resistors. It is easy to check that 2 and 3 are not good by enumerating every possible arrangement of 2 and 3 resistors. The last case 5 is a bit special. There is a configuration of 5 resistors called the [Wheatstone bridge](https://en.wikipedia.org/wiki/Wheatstone_bridge) that has an effective resistance of 1$\Omega$, but this is deceptive. If you work out the math, there is no current going through the middle resistor since the voltage drop across it is zero (simply by symmetry). The remaining cases of 5 resistors can be checked by hand, and it turns out that 5 is *not* good.

So our final answer to the first problem is that all values of $n$ are good except for 2, 3, and 5. 

## The second problem 
The second problem has a similar solution to the first one. Call $n$ good if a square can be partitioned into $n$ squares. 
1. All square numbers are good by the obvious construction. 
2. If $n$ and $m$ are good, then $n + m -1$ is good (divide the square into $n$ squares, then divide one of the smaller squares into $m$ squares). 
3. All even numbers are good because one can line up $2k-1$ squares along two sides of the square, and the remaining space is a single square.
4. The number $n=2$ is not good. This is because if $2$ were good, at least one of the two squares would have its corners at one of the corners of the big square and its sides overlapping the sides of the big square. This would force that square to completely overlap the big square or it would force  the remaining square to be an $L$ shape. Both of these are absurd. 
5. The numbers $n = 3$ and $n=5$ are not good. This is because an $L$ shape with equal sized prongs cannot be divided into two or four squares. The proof is similar to the proof of the previous point but breaks into a number of cases, so I am not going to write it down. 
6. Since our solution to the previous problem only used these facts, the answer is the same as in the previous problem.  

</details>

