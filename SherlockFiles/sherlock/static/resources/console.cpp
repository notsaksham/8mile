#include<iostream>
#include<fstream>

#include<string.h>
#include<unistd.h>
#include <stdlib.h>
//#include<stdio.h>
using namespace std; 
void print_relay_hack(){
	char c[] = 
	" ____  _____ _        _ __   __  _   _    _    ____ _  __\
	\n|  _ \\| ____| |      / \\\\ \\ / / | | | |  / \\  / ___| |/ /\
	\n| |_) |  _| | |     / _ \\\\ V /  | |_| | / _ \\| |   | ' / \
	\n|  _ <| |___| |___ / ___ \\| |   |  _  |/ ___ \\ |___| . \\ \
	\n|_| \\_\\_____|_____/_/   \\_\\_|   |_| |_/_/   \\_\\____|_|\\_\\ "
	;
	printf("\u001b[32;1m%s\n\n\n",c);
}

void typewriter(char hello[]){
        int x=0;
        while ( hello[x] != '\0')
        {
	        printf("%c",hello[x]);
	        fflush(stdout);         
	        usleep(100000+ rand()%10000 );
	        x++;
        };
        
        usleep(10000+ rand()%1000 );
}

void loading(char pre[], char post[]){
printf("\n \u001b[37m%s... \n",pre);
float progress = 0.0;
while (progress < 1.0) {
    int barWidth = 50;

    std::cout << "[";
    int pos = barWidth * progress;
    for (int i = 0; i <= barWidth; ++i) {
        if (i < pos) std::cout << "=";
        else if (i == pos) std::cout << ">";
        else std::cout << " ";
    }
    std::cout << "] " << int(progress * 100.0) << " %\r";
    std::cout.flush();
    usleep(rand()%100000);

    progress += 0.01; // make it to 0.01
}

std::cout << std::endl;
cout<<post<<endl;
std::cout.flush();

}


int main()
{
print_relay_hack();
loading("LOADING...", "LOADING COMPLETE...");
loading("Connecting to mainframe.","SUCCESS.");
loading( "Initiating IRC at 83.140.172.219 ..."," ");
sleep(3);
system("clear");

char user1[] = "\033[1;31m[Gr8Ayu] : \033[0m";
char user2[] = "\033[1;32m[You] : \033[0m";
char hello[] = "Hello There, Glad you made it to here...";
char input[300],c;




cout << user1;
typewriter("Hello There.\n");

cout << user1;
typewriter("Glad you made it to here...\n");
cout << user1;
typewriter("Let's start with introduction. I am Gr8ayu, creator of this game. Tell me your name.  \n");


cout<<user2; cin>>input;
while (getchar() != '\n');

cout<<user1; typewriter("Interesting name, "); typewriter(input); typewriter(". What brings you to me ?\n"); 

cout<<user2; scanf("%s",input);
while (getchar() != '\n');

cout<<user1; typewriter("Aah, I see. That's what everyone wants. But I can't just give that to you.\n");
// cout<<user1; typewriter(input);


cout<<user2; scanf("%s",input);
while (getchar() != '\n');

cout<<user1; typewriter("Fine then. I can only show you the way. If you truly desire, you'll have to find it the hard way. The key is stor");
// cout<<user1; typewriter(input);



    cout<<endl<<endl;
    for (int i = 0; i < 5; ++i)
    {
        if(i%2){typewriter("\r\u001b[31mReconnecting...");}
        else{typewriter("\r\u001b[37mReconnecting...");}
    }
    //system("echo 4066065DE9130579502E092072BD5037 >Gr8ayu");
	ofstream fout;
	fout.open("GR8AYU");
	fout<<"[4066065DE9130579502E092072BD5037]"<<endl;
	fout.close();
	
	cout<<endl<<endl<<"\u001b[31m\nConnection lost. Host offline.\n\n\n";
	return 0;
}
