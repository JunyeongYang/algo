// #define _CAT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>

// int main()
// {
//   int i=0;
//   int len;
//   char s1[256],s2[256],s3[512];

//   printf("문자열입력1");
//   scanf("%s",s1);
//   printf("문자열입력2");
//   scanf("%s",s2);

//   for(i=0;;i++)
//   {
//     if(s1[i]=='\0')
//     {
//       break;
//     }
//   }
//   len = i;

//   for(i=0;i<=len;i++)
//   {
//     if(s1[i]-s2[i]!=0)
//     {
//       printf("다름");
//       break;
//     }
//   }

//   if(i>len)
//   {
//     printf ("같음");
//   }

//   return 0;
// }






// int main()
// {

//   char s1[258],s2[258],s3[516];
//   int i=0, j=0;
//   int len1,len2;

//   printf("문자열입력1");
//   scanf("%s",s1);
//   printf("문자열입력2");
//   scanf("%s",s2);

//   for(i=0;;i++)
//   {
//     if(s1[i]=='\0')
//     {
//       break;
//     }
//   }
//   len1= i;
//   for(i=0;;i++)
//   {
//     if(s2[i]=='\0')
//     {
//       break;
//     }
//   }
//   len2 = i;

//   for(i=0;i<len1;i++)
//   {
//     s3[i] = s1[i];  
//   }

//   for(j=0;j<len2;j++)
//   {
//     s3[i] = s2[j];  
//     i++;
//   }

 

//   printf("%s", s3);


//   return 0;
// }




int main()
{
  int i,j;
  char s1[256],s2[256],s3[512];
  int len1,len2;

  scanf("%s",s1);
  scanf("%s",s2);

  for(i=0;;i++)
  {
    if(s1[i]=='\0')
        break;
  }
  len1 = i;
  for(i=0;;i++)
  {
    if(s2[i]=='\0')
        break;
  }
  len2 = i;

  for(i=0; i<len1; i++)
  {
    s3[i]=s1[i];
  }

  for(j=0; j<len2; j++)
  {
    s3[i]= s2[j];
    i++;
  }

  printf("%s", s3);

  return 0 ;


}