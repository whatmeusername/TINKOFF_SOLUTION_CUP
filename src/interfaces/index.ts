interface Expense {
	name: string;
	description?: string;
	category: string;
	id?: number;
	spend: number;
	date?: Date;
}

interface DateSortData {
	begin: Date | null;
	end: Date | null;
}

export type { Expense, DateSortData };
