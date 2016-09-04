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

	// Function to clear the array
	void clear() {
		for (int k = 0; k < sizeof(array[0]); k++) {
			for (int i = 0; i < sizeof(array[0]); i++) {
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
		for (int i = 0; i < sizeof(array[0]); i++) {
			printf("%d ",i);
		}
		printf("\n");
		
		for (int i = 0; i < sizeof(array[0]); i++) {
			printf("%d: ",i);
			for (int k = 0; k < sizeof(array[0]); k++) {	
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
			printf("Improper move command. Resetting.");
		}
	
		char test = sizeof(array[0]);
		// Check to see if pen movement was within boundaries
		if (penX < 0) {
			printError();
			penX = 0;
		}
		else if (penX > test - 1) {
			printError();
			penX = test - 1;
		}

		test = sizeof(array[0]);
		if (penY > test - 1) {
			printError();
			penY = test - 1;
		}
		else if (penY < 0) {
			printError();
			penY = 0;
		}

	}
	
	return 0;
}
