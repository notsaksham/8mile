#include<stdio.h>
#include<string.h>
int main(int argc, char **argv){
if(argc != 2){
        printf("Invalid Format\n to open use : ./program password\n");
        return 0;
}
if(strcmp(argv[1] ,"marlboro")==0){printf("AD54E713C37919A76AE0E68C33C675BD\n"); return 0;}
else{printf("FAILED\n"); return 0;}




}
