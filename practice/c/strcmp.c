// #define _CAT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>
// #include <stdlib.h>

// int main()
// {
//   int arrSize = 10;
//   char s1[arrSize], s2[arrSize];

//   printf("문자열을 입력해세요");
//   scanf("%s %s", s1, s2);

//   int ret = strcmp(s1, s2);
  
//   if (ret == 0){
//     printf("같음");
//   }
//   else{
//     printf("다름");
//   }

//   return 0;
// }





int main()
{
  int arrSize=10;
  char s1[arrSize];
  char s2[arrSize];
  char s3[arrSize*2];

  printf("문자열입력해주세요.");
  scanf("%s %s", s1, s2);

  int s1Length = strlen(s1);
  int s2Length = strlen(s2);

  //2개의 문자열 길이 비교
  if(s1Length != s2Length)
  {
    printf("틀림!");
    return 0;
  }

  //문자열 비교
  for(int i = 0; i< s1Length; i++)
  {
    if(s1[i] != s2[i]) 
    {
      printf("틀림!");
      return 0;
    }
  }

  strcat(s1,s2);
  strcat(s3,s1);
  printf("성공!");
  printf("%s", s3);

  return 0;
}


