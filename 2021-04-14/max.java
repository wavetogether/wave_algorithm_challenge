import java.util.*;
  
class Main {
    public static int reversort(int[] list) {

      int cost = 0;
      for(int i=0;i<list.length-1;i++) {
        int j = getMinValueIndex(list, i, list.length);

        if(j>i) {
          reverse(list,i,j);
        }

        cost += j-i+1;
      }
      
      return cost;
    }

    public static int getMinValueIndex(int[] list, int start, int end) {
      int minValueIndex = start;
      int minValue = list[minValueIndex];
      for(int i=start;i<end;i++) {
        if(minValue > list[i]) {
          minValue = list[i];
          minValueIndex = i;
        }
      }

      return minValueIndex;
    }

    public static void reverse(int[] list,int start, int end) {
      for (int i=0;i<(start+end)/2;i++) {
        int temp = list[start + i];
        list[start + i] = list[end - i];
        list[end - i] = temp;
      }
    }

    public static void main(String args[])
    {
        Scanner in = new Scanner(System.in);
  
        int questionCount = in.nextInt();

        int[][] lists = new int[questionCount][];
        for(int i=0; i<questionCount; i++) {
            int elementCount = in.nextInt();
            
            int[] list = new int[elementCount];
            for(int j=0;j<elementCount;j++) {
                int element = in.nextInt();
                list[j]= element;
            }

            lists[i] = list;
        }

        for(int i=0;i<lists.length;i++) {
          System.out.println("Case #"+(i+1)+": "+ reversort(lists[i]));
        }
    }
}
