#include <stdio.h> 
#include <ctype.h>

/**
 *
 * This code creates a small sketchpad.
 *
 */

int main(void) {
	// The array where the sketch will be held
	char array[8][8];
	int x = sizeof(array[0]);
	int y = sizeof(array) / sizeof(array[0]);

	// Function to clear the array
	void clear() {
		for (int k = 0; k < y; k++) {
			for (int i = 0; i < x; i++) {
				array[k][i] = ' ';
			}
		}
	}

	printf("Use 'mark','up','down','left','right','clear' as inputs to control\n");

	// Set the pen at 0,0
	signed char penX = 0;
	signed char penY = 0;

	// Clear the array by setting empty values
	clear();

	while(1) {
		printf("Pen is at %d, %d\n",penX,penY);
		printf("   ");
		for (int i = 0; i < x; i++) {
			printf("%d ",i);
		}
		printf("\n");
		
		for (int i = 0; i < y; i++) {
			printf("%d: ",i);
			for (int k = 0; k < x; k++) {	
				printf("%c ", array[i][k]);	
			}
			printf("\n");
		}

		// Ask for input and move or mark pen 
		char input[5];
		scanf("%s",input);
		if (input[0] == 'u') penY--;
		else if (input[0] == 'd') penY++;
		else if (input[0] == 'l') penX--;
		else if (input[0] == 'r') penX++;
		else if (input[0] == 'c') clear();
		else if (input[0] == 'm') array[penY][penX] = 88;
		else printf("Improper input");
		
		void printError(void) {
			printf("Improper move command. Resetting.\n");
		}
	
		// Check to see if pen movement was within boundaries
		if (penX < 0) {
			printError();
			penX = 0;
		}
		else if (penX > x - 1) {
			printError();
			penX = x - 1;
		}

		if (penY > y - 1) {
			printError();
			penY = y - 1;
		}
		else if (penY < 0) {
			printError();
			penY = 0;
		}

	}
	
	return 0;
}
