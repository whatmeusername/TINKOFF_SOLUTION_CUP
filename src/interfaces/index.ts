interface Expense {
	name: string;
	description?: string;
	category: string;
	id?: number;
	spend: number;
	date?: Date;
}

export type { Expense };
