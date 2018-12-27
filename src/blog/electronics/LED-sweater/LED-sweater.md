---
author: "Olivier"
date: "2018-12-24"
category: "Electronics"
title: "LED sweater"
description: "This fun project will guide you through the implementation of a small electronics project, from the design of the circuit to the realization of a prototype to the final printed circuit." 
sections: "Parts Prototype"
path: "/blog/electronics/LED-sweater"
---

## The circuit

The circuit is designed around the NE555 and the CD4022 chipsets. The NE555 generates a clock signal that gets divided by 8 by the CD4022 chipset. Each output of the CD4022 corresponds to a (1/8) subdivision of the clock signal and switches on/off in turn the LEDs connected to a bjt transistor. The transistors are used as a switch.

The voltage drop of each LED is around 3V and requires a current of 20mA. After some tests, the LEDs were found too bright with this level of current. We will use 10mA instead. This will also limit the current consumption of the overall circuit and therefore the battery life.

We first start by calculating the value of the resistor at the collector of the transistor. This resistor is used to limit the current going through the LED to 10mA. The collector-emitter voltage of the transistor when in saturation mode is around 0.2V.

R = (9V - 2 x 3V) / 10mA = 3 * 100 = 300 ohm. We choose a resistor value a bit lower The power consumption of the resistor is V x I = R x I2 = 320 x 0.01 x 0.01 = W which is lower than the 1/4W limit

The transistors are used as a switch. The base resistor value is choosen to drive the transistors into saturation. In order to compute its value, we underestimate the transistor beta. Common convention is to use a beta of 5.

The base resitor value should be:
R = (5 - 0.7) / (10mA / 5) = (4.3 * 5 * 1000) / 10 = 4.3 * 500 = 2150 ohm. We
will round this to 2.2k ohm.
where 0.7V is the voltage drop between the base and the emitter of the transistor.


## Power consumption

The power consumption of the circuit is essentially

## The prototype



## Parts

