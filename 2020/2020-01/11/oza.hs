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

-- Complete the getMinimumCost function below.
getMinimumCost::Int -> [Int] -> Int
getMinimumCost k c = Data.List.foldr (\(index, price) cost -> cost + price * ((+1) $ index `div` k)) 0 $ addIndex.sortDesc c

sortDesc::[Int] -> [Int]
sortDesc xs = reverse $ sort xs

addIndex::[Int] -> [(Int,Int)]
addIndex [] = []
addIndex (x:[]) = [(0,x)]
addIndex xs = zip [0..] xs

main :: IO()
main = do
    stdout <- getEnv "OUTPUT_PATH"
    fptr <- openFile stdout WriteMode

    nkTemp <- getLine
    let nk = words nkTemp

    let n = read (nk !! 0) :: Int

    let k = read (nk !! 1) :: Int

    cTemp <- getLine

    let c = Data.List.map (read :: String -> Int) . words $ cTemp

    let minimumCost = getMinimumCost k c

    hPutStrLn fptr $ show minimumCost

    hFlush fptr
    hClose fptr
