package main

import (
    "bufio"
    "fmt"
    "io"
    "os"
    "strconv"
    "strings"
    "math" // import math to use modulo division (%)
)

// Complete the kangaroo function below.
func kangaroo(x1 int32, v1 int32, x2 int32, v2 int32) string { 
    if (v1 == v2) { // avoid divide by zero
        if (x1 == x2) {
            return "YES"
        } else {
            return "NO"
        }
    }
    n := float64(x2-x1) / float64(v1-v2); // x1 + (v1 * n) = x2 + (v2 * n)
    if (n>0 && math.Mod(n,1) == 0) {
        return "YES"
    }
    return "NO"
}

func main() {
    reader := bufio.NewReaderSize(os.Stdin, 1024 * 1024)

    stdout, err := os.Create(os.Getenv("OUTPUT_PATH"))
    checkError(err)

    defer stdout.Close()

    writer := bufio.NewWriterSize(stdout, 1024 * 1024)

    x1V1X2V2 := strings.Split(readLine(reader), " ")

    x1Temp, err := strconv.ParseInt(x1V1X2V2[0], 10, 64)
    checkError(err)
    x1 := int32(x1Temp)

    v1Temp, err := strconv.ParseInt(x1V1X2V2[1], 10, 64)
    checkError(err)
    v1 := int32(v1Temp)

    x2Temp, err := strconv.ParseInt(x1V1X2V2[2], 10, 64)
    checkError(err)
    x2 := int32(x2Temp)

    v2Temp, err := strconv.ParseInt(x1V1X2V2[3], 10, 64)
    checkError(err)
    v2 := int32(v2Temp)

    result := kangaroo(x1, v1, x2, v2)

    fmt.Fprintf(writer, "%s\n", result)

    writer.Flush()
}

func readLine(reader *bufio.Reader) string {
    str, _, err := reader.ReadLine()
    if err == io.EOF {
        return ""
    }

    return strings.TrimRight(string(str), "\r\n")
}

func checkError(err error) {
    if err != nil {
        panic(err)
    }
}
