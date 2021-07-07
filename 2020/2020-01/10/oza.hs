{-# LANGUAGE FlexibleInstances, UndecidableInstances, DuplicateRecordFields #-}

module Main where

import Control.Monad
import Data.Array
import Data.Maybe
import Data.Bits
import Data.List
import Data.List.Split
import Data.Set
import Debug.Trace
import System.Environment
import System.IO
import System.IO.Unsafe

-- Complete the climbingLeaderboard function below.
climbingLeaderboard :: [Int] -> [Int] -> [Int]
climbingLeaderboard scores alice = Data.List.map myRank alice
    where myRank x = 
            let res = maybeMyRank x
                uniqueLength = length uniqueScores
            in if isJust res then (+1) $ fromJust res else uniqueLength + 1
          maybeMyRank x = Data.List.findIndex (<=x) uniqueScores
          uniqueScores = Data.List.map head $ group scores

main :: IO()
main = do
    stdout <- getEnv "OUTPUT_PATH"
    fptr <- openFile stdout WriteMode

    scoresCount <- readLn :: IO Int

    scoresTemp <- getLine

    let scores = Data.List.map (read :: String -> Int) . words $ scoresTemp

    aliceCount <- readLn :: IO Int

    aliceTemp <- getLine

    let alice = Data.List.map (read :: String -> Int) . words $ aliceTemp

    let result = climbingLeaderboard scores alice

    hPutStrLn fptr $ intercalate "\n" $ Data.List.map (\x -> show x) $ result

    hFlush fptr
    hClose fptr
