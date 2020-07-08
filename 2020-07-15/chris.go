func minSteps(s string, t string) int {
	sCharCount := map[rune]int{}
	tCharCount := map[rune]int{}
    
	for _, char := range s {
		sCharCount[char]++
	}
    
	for _, char := range t {
		tCharCount[char]++
	}
    
	steps := 0
	
	for char := range sCharCount {
		diff := sCharCount[char] - tCharCount[char]
		if 0 < diff {
			steps += diff
		}
	}
  
	return steps
}
