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
MAX_ENEMY = 3

class Position():
    x = 0
    y = 0

    def __init__(self,x, y):
        self.x = x
        self.y = y

# Return True if is a valid position or you can stand at it
def validatePosition(pos, n):
    if pos.x < 0 or pos.y < 0 or pos.x >= n or pos.y >= n:
        return False
    return True

# Return true or false if you can defeat the enemies arround you
def validateEnemies(pos, table):
    counter = 0

    for i in range(pos.y - 1, pos.y + 1):
        for j in range(pos.x - 1, pos.x + 1):
            if validatePosition( Position(j, i), len(table)):
                if table[i][j] == ENEMY:
                    counter += 1
    
    if counter >= MAX_ENEMY:
        return False
    return True


# TODO: implemet the can save princess method
def canSavePrincess(me, table, start=True):
    
    # TODO: Complete start flag to build a temp global tmp table
    # and check if the position has been visited, to don't repeat
    # and avoid enlees recursion process.

    # If found an invalid position
    if not validatePosition(me, len(table)): 
        return False

    # If you're in the princess position return True
    if table[me.y][me.x] == PRINCES:
        return True

    # If you can't beat all the enemies
    # in your current position
    if not validateEnemies(me, table):
        return False

    # TODO: Fix possible enless recursion
    # Visiting the left, rigth, down, up, downleft, downrigth, upleft and uprigth
    for i in range(me.y - 1, me.y + 1):
        for j in range(me.x - 1, me.x + 1):
            if i != me.y and j != me.x and canSavePrincess(Position(j, i), table, False):
                return True
    
    return False



grid = [
    [EMPTY, ENEMY, EMPTY, EMPTY],
    [ENEMY, EMPTY, EMPTY, PRINCES],
    [ENEMY, EMPTY, EMPTY, ENEMY],
    [EMPTY, ENEMY, ENEMY, EMPTY]
]

print(canSavePrincess(Position(0, 0), grid))
