# Find the Princess 

# Starting at a position (x, y) and given a table of size
# N x N your task is to find wheather is a possible path where
# you can traversal the grid and point on the same position of 
# the princess. Print Yes or No if is possible or not to save
# the princess.

# Constraints: you can point in a position A (x, y) only if there 
# are no more than 3 enemies surrinding. You can move horizontal, 
# vertial and diagonal one block a time.

# The goal is to see if it's possible to reach from position A to B
# where A is your starting point and B is the position where the 
# princess is located

# For the future enhacements: Add a life consumer, where you can kill
# a enemy reduce 1 of hp and finding food grants you 1 hp.

ENEMY = 'X'
PRINCES = 'P'
EMPTY = '.'

class Position():
    x = 0
    y = 0

    def __init__(self,x, y):
        self.x = x
        self.y = y


# TODO: implemet the can save princess method
def canSavePrincess(me, table):
    return True



grid = [
    [EMPTY, ENEMY, EMPTY, EMPTY],
    [ENEMY, EMPTY, EMPTY, PRINCES],
    [ENEMY, EMPTY, EMPTY, ENEMY],
    [EMPTY, ENEMY, ENEMY, EMPTY]
]

print(canSavePrincess(Position(0, 0), grid))