export class Clinic {
  public id: string;
  public name: string;
  public openingHours: OpeningHours[];

  constructor(id: string, name: string, openingHours: OpeningHours[]) {
    this.id = id;
    this.name = name;
    this.openingHours = openingHours;
  }
}
export class OpeningHours {
  public mon: Mon;
  public tue: Tue;  
  public wed: Wed;
  public thu: Thu;
  public fri: Fri;
  public sat: Sat;
  public sun: Sun;
  constructor(mon: Mon, tue: Tue, wed: Wed, thu: Thu, fri: Fri, sat: Sat, sun: Sun) {
    this.mon = mon;
    this.tue = tue;
    this.wed = wed;
    this.thu = thu;
    this.fri = fri;
    this.sat = sat;
    this.sun = sun;
  }
}

export class Mon {
  public periods: Period;
  public isOpen: boolean;
  constructor(isOpen: boolean, periods: Period) {    
    this.isOpen = isOpen;
    this.periods = periods;
  }
}

export class Tue {
  public periods: Period;
  public isOpen: boolean;
  constructor(isOpen: boolean, periods: Period) {
    this.isOpen = isOpen;
    this.periods = periods;
  }
}

export class Wed {
  public periods: Period;
  public isOpen: boolean;
  constructor(isOpen: boolean, periods: Period) {
    this.isOpen = isOpen;
    this.periods = periods;
  }
}

export class Thu {
  public periods: Period;
  public isOpen: boolean;
  constructor(isOpen: boolean, periods: Period) {
    this.isOpen = isOpen;
    this.periods = periods;
  }
}

export class Fri {
  public periods: Period;
  public isOpen: boolean;
  constructor(isOpen: boolean, periods: Period) {
    this.isOpen = isOpen;
    this.periods = periods;
  }
}

export class Sat {
  public periods: Period;
  public isOpen: boolean;
  constructor(isOpen: boolean, periods: Period) {
    this.isOpen = isOpen;
    this.periods = periods;
  }
}

export class Sun {
  public periods: Period;
  public isOpen: boolean;
  constructor(isOpen: boolean, periods: Period) {
    this.isOpen = isOpen;
    this.periods = periods;
  }
}

export class Period {
  public from: Number;
  public to: Number;

  constructor(from: Number, to: Number) {
    this.from = from;
    this.to = to;
  }
}
