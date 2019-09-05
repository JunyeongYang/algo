#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main()
{
  int arr[6],i,j;
   srand(time(NULL));
  for(i=0;i<6;i++)
  {
    again:;
    int random = rand()%49+1;  //랜덤숫자만들기
    
    //중복검사하기

    for(j=0; j<i;j++)
    {
      if(random == arr[j])
      {
        goto again;
      }
    }    
    arr[i] = random; //중복검사완료된 숫자 배열에 넣기

    printf("%d\n",random);
  }


  return 0;
}