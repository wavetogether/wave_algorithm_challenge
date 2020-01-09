{-# LANGUAGE FlexibleInstances, UndecidableInstances, DuplicateRecordFields #-}

module Main where

import Control.Monad
import Data.Array
import Data.Bits
import Data.List
import Data.List.Split
import Data.Set
import Debug.Trace
import System.Environment
import System.IO
import System.IO.Unsafe

-- Complete the kangaroo function below.
kangaroo :: Int -> Int -> Int -> Int -> String
kangaroo x1 v1 x2 v2
    | (x1 - x2) * (v1 - v2) > 0 = "NO"
    | (x1 - x2) `mod` (v2 - v1) == 0 = "YES"
    | otherwise = "NO"

main :: IO()
main = do
    stdout <- getEnv "OUTPUT_PATH"
    fptr <- openFile stdout WriteMode

    x1V1X2V2Temp <- getLine
    let x1V1X2V2 = words x1V1X2V2Temp

    let x1 = read (x1V1X2V2 !! 0) :: Int

    let v1 = read (x1V1X2V2 !! 1) :: Int

    let x2 = read (x1V1X2V2 !! 2) :: Int

    let v2 = read (x1V1X2V2 !! 3) :: Int

    let result = kangaroo x1 v1 x2 v2

    hPutStrLn fptr result

    hFlush fptr
    hClose fptr
