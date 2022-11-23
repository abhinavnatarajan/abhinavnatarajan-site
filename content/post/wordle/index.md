---
title: The Mathematics of Wordle
summary: A list of Wordle-related resources.
tags: ['games', 'optimisation']
show_date: true
date: 05 Oct 2022
type: post
---
Wordle is an online puzzle similar to [Master Mind](https://en.wikipedia.org/wiki/Mastermind_(board_game)) where the aim is to guess a secret word of fixed-length in six guesses. Each guess can potentially reveal information about the secret word through a coloured response code: a letter placed in the correct position is coloured green, a letter placed in the wrong position is coloured yellow, and a letter that is not present in the secret word is coloured grey. The guesses must be from a list of allowed guesses, which are all (mostly common) English words, and the set of possible secret words is a (significantly smaller) subset of the allowed guesses. The usual variant of Wordle deals with 5-letter words, but variants with more or less letters exist. There are also variants that twist the rules or are loosely inspired by Wordle, such as [Absurdle](https://qntm.org/files/absurdle/absurdle.html), [Nerdle](https://nerdlegame.com/), [Quordle](https://www.quordle.com/#/), [Squardle](https://fubargames.se/squardle/), [Semantle](https://semantle.com/), [Worldle](https://worldle.teuteuf.fr/), and the humourous but surprisingly challenging [Lewdle](https://www.lewdlegame.com/). 

When I encountered Wordle, I wondered whether there was a way to solve it programmatically. Master Mind has well-known optimal strategies (for various reasonable definitions of *optimal*), so it did not seem like a stretch to imagine that Wordle should be easily solvable too. Unfortunately the solution space and guess space are constrained to be English words, whereas in Master Mind the solutions and guesses are numeric sequences with no constraints on the digits of the sequence. It turns out that there are still somewhat optimal strategies and upper bounds on how "badly" one can do. Here are some resources I found. 
1. Two excellent blog posts by Laurent Lessard about various strategies to solve Wordle -- [here](https://laurentlessard.com/solving-wordle/) and [here](https://laurentlessard.com/bookproofs/optimal-wordle/) -- and the accompanying [code](https://github.com/LaurentLessard/wordlesolver).
2. A [video](https://www.youtube.com/watch?v=v68zYyaEmEA&ab_channel=3Blue1Brown) by 3Blue1Brown on an entropy-based strategy.