use std::ops::BitXor;

impl Solution {
    pub fn hamming_distance(x: i32, y: i32) -> i32 {
        let xor = x.bitxor(y) as u32;
        return xor.count_ones() as i32;
    }
}
