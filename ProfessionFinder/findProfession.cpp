// Problem url: https://app.codesignal.com/interview-practice/task/FwAR7koSB3uYYsqDp
std::string ENGINEER = "Engineer";
std::string DOCTOR = "Doctor";

std::vector<bool> myProfession(int level, int position, int twosPowes, std::vector<bool> direction) {
    
    if (level == 1) {
        return direction;
    }
    double midPos = ceil(position / 2.0);
    double absMid = position / 2.0;
    
    if (midPos == absMid) { q1
        direction.push_back(false);
    } else {
        direction.push_back(true);
    }

    return myProfession(level - 1, midPos, twosPowes >> 1, direction);
}

std::string changeSon(std::string parent) {
	return parent == ENGINEER ? DOCTOR : ENGINEER;
}

std::string backTrack(std::vector<bool> direction, int curIndex, std::string output) {

    if (curIndex < 0) {
    	return output;
    }
    
    if ( !direction[curIndex] ) {
    	output = changeSon(output);
    }
    return backTrack(direction, curIndex - 1, output);
}

std::string findProfession(int level, int position) {

    long long twosPowes = 1;
    int start = 1;
    std::vector<bool> direction;
    std::string res = "";

    while (start < level) {
        twosPowes <<= 1;
        start++;
    }

	direction = myProfession(level, position, twosPowes, direction);
    res = backTrack(direction, direction.size() - 1, ENGINEER);

    return res;
}
