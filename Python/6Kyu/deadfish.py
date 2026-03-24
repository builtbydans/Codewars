# Create a parser to interpret and execute the Deadfish language.

# Deadfish operates on a single value in memory, which is initially set to 0.

# It uses four single-character commands:

# i: Increment the value
# d: Decrement the value
# s: Square the value
# o: Output the value to a result array
# All other instructions are no-ops and have no effect.

# Examples
# Program "iiisdoso" should return numbers [8, 64].
# Program "iiisdosodddddiso" should return numbers [8, 64, 3600].

def parse(data):
    counter = 0
    result = []

    for s in data:
        if s == "i": counter += 1
        elif s == "d": counter -= 1
        elif s == "s": counter = counter ** 2
        elif s == "o": result.append(counter)
    return result

print(parse("ooo")) # [0,0,0]
print(parse("ioioio")) # [1,2,3]
print(parse("idoiido")) # [0,1]
print(parse("isoisoiso")) # [1,4,25]
print(parse("codewars")) # [0]
