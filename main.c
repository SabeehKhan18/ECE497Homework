#include <stdio.h>

int main(void) {
	// The array where the sketch will be held
	char array[8][8];

	// Function to clear the array
	void clear() {
		for (int k = 0; k < sizeof(array[0]); k++) {
			for (int i = 0; i < sizeof(array[0][0]); i++) {
				array[k][i] = (char) 0;
			}
		}
	}

	// Set the pen at 0,0
	char penX = 0;
	char penY = 0;

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
			for (int k = 0; k < sizeof(array[0][0]); k++) {	
				printf(array[i][k] + " ");	
			}
			printf("\n");
		}
	}
	
	return 0;
}
