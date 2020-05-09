// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
var tempResult = [];

function getSum(a, b, aLen, bLen) {
    if (aLen > bLen) {
        tempResult.push(a.value);
        getSum(a.next, b, aLen-1, bLen);
    } else if (aLen < bLen) {
        tempResult.push(b.value);
        getSum(a, b.next, aLen, bLen-1);
    } else if (aLen!=0 && bLen!=0){
        tempResult.push(a.value + b.value);
        getSum(a.next, b.next, aLen-1, bLen-1);
    }
}

function convertToFourDigits() {
    var toNextSum = 0;
    for (var i  = tempResult.length - 1; i > -1; i--) {
        tempResult[i] = tempResult[i] + toNextSum;
        if (tempResult[i] > 9999) {
            toNextSum = 1;
            tempResult[i] = tempResult[i] % 10000;
        } else { 
            toNextSum = 0;
        }
    }
    if (toNextSum != 0) {
        var xTemp = [];
        xTemp[0] = toNextSum;
        for (var i = 0; i < tempResult.length; i++) {
            xTemp.push(tempResult[i]);
        }
        tempResult = xTemp;
    }
}

function getLen(x) {
    var counter = 0;
    while (x != null) {
        x = x.next;
        counter++;
    }
    return counter;
}

function toListNode(x) {
    var resultNode = null;
    var tempNode = null;
    for (var i = 0; i < x.length; i++) {
        if (tempNode == null) {
            tempNode = new ListNode(x[i]);
            resultNode = tempNode;
        } else {
            tempNode.next = new ListNode(x[i]);
            tempNode = tempNode.next;
        }
    }
    return resultNode;
}

function addTwoHugeNumbers(a, b) {
    
    var result = [];
    var aLen = getLen(a);
    var bLen = getLen(b);
    
    if (aLen == 0) return b;
    else if (bLen == 0) return a;
    
    getSum(a, b, aLen, bLen);
    convertToFourDigits();
    
    result = tempResult;
    
    return toListNode(result);
}
