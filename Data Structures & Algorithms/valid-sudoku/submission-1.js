class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
        isValidSudoku(board) {
            const cols = new Array(9).fill(0);
            const rows = new Array(9).fill(0);
            const blocks = new Array(9).fill(0);
            
            for(let c = 0; c < cols.length; c++) {
                for(let r = 0; r < rows.length; r++) {
                    if(nums[c][r] === '.') continue;
                    const val = nums[c][r];

                    const inBit = 1 << val-1;

                    const currentBlock = Math.floor(c/3) + Math.floor(r/3) * 3;

                    if(rows[r] & inBit || cols[c] & inBit || blocks[currentBlock] & inBit )
                    return false;

                    rows[r] = rows[r] | inBit;
                    cols[c] = cols[c] | inBit;
                    blocks[currentBlock] = blocks[currentBlock] | inBit;
                }
            }
            return true;
        }
}
