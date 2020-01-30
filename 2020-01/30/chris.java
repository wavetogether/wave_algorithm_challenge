class Solution {
    public int hammingDistance(final int x, final int y) {
        final int xor = x ^ y;
        return Integer.bitCount(xor);
    }
}
