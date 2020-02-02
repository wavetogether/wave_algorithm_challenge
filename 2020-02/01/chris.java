/**
 * Overflow 문제는 잡지 않음
 */
class Solution {
    public int reverse(int x) {
        int reversedNumber = 0;

        while (x != 0) {
            final int lastDigit = x % 10;
            reversedNumber *= 10;       
            reversedNumber += lastDigit;

            x /= 10;
        }

        return reversedNumber;
    }
}
