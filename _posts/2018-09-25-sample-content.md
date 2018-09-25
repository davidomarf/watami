---
layout: post
title:  Content style with Markdown
subtitle: This post is meant to show the properties of markdown. This specific part is the subtitle. And it's completely customizable! It can be any length, but it's at its best if you keep it brief.
date:   2016-09-04
author: david
excerpt: This post is meant to show the properties of markdown. This is customizable. Is an excerpt.
---

Let's imagine this is a great article you really made an effort to write. It's well written, it's appropiately lengthy, and it has meaningful content.

And this is the part you sligthly introduce the importance of what you're writing. Oh! Did I mention that **7 of every 10 people represent 70% of that people**? Well, I did now.

I think some people refer to this part as justification. Try to convince people your article worths a read.

## Content
{:.no_toc}

`This is a table of contents. It's automatically generated! (Only if you want, of course)`

* TOC
{:toc}

## I'm Thrór

But you can call me H2 header. 

### I'm Thráin, Son of Thrór

But you can call me H3 header.

#### I'm Thorin, Son of Thráin, Son of Thrór

This is H4, you get the point.

## Some elements

### Text

`Hey! In Markdown you can easily add **bold**, or *italic* text modifiers ~~or whatever they are called~~.`

Hey! In Markdown you can easily add **bold**, or *italic* text modifiers ~~or whatever they are called~~.

`You can ~~*even* **mix** ***them***~~`

You can ~~*even* **mix** ***them***~~

If you want to divide some text by some reason, you can do it with a rule: `---`

---

That gives the impression that the two paragraphs are related, but just sligthly. Doesn't it?

#### Citing

So you say you know how to cite external texts? Great! Look at me! I'm a flagrant act of copyright infrigment![^Hercules]

### Tables

Tables can be generated easilly with [Markdown Table Generator](https://www.tablesgenerator.com/markdown_tables){:target="_blank"}.

| Satellite              	| Suburb                   	|
|------------------------	|--------------------------	|
| Consumes labor         	| Consumes products        	|
| Supplies products      	| Supplies labor           	|
| Usually larger in size 	| Usually larger in number 	|

### Code Syntax

```d
void main()
{
    import std.stdio, std.string, std.algorithm, std.conv;

    // Reduce the RPN expression using a stack
    readln.split.fold!((stack, op)
    {
        switch (op)
        {
            // Generate operator switch cases statically
            static foreach (c; "+-*/")
                case [c]:
                    return stack[0 .. $ - 2] ~
                        mixin("stack[$ - 2] " ~ c ~
                            " stack[$ - 1]");
            default: return stack ~ op.to!real;
        }
    })((real[]).init).writeln;
}
```

## References

[^Hercules]: Hercules, H. Philoctetes, P. (231 B.C). *One last hope.* Mount Olympus. 