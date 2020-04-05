import { BOARD_SIZE } from '../component/Board';

/**
 * @param {number[][]} board 
 * @returns {boolean}
 */
export function isValidSudoku(board) {
    const cells = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    const cols = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    const rows = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    const groupSize = BOARD_SIZE / 3;

    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
            const cellValue = board[i][j];

            if (cellValue !== null) {
                const group = Math.floor(j / groupSize) + (Math.floor(i / groupSize) * groupSize);

                if (cells[group][cellValue] || cols[j][cellValue] || rows[i][cellValue]) {
                    return false;
                }

                cells[group][cellValue] = cols[j][cellValue] = rows[i][cellValue] = true;
            }
        }
    }

    return true;
}