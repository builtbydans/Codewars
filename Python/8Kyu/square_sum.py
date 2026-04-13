

def square_sum(numbers):
    return sum(n ** 2 for n in numbers)

print(square_sum([1,2]))
print(square_sum([0, 3, 4, 5]))
print(square_sum([]))
print(square_sum([-1,-2]))
print(square_sum([-1,0,1]))
