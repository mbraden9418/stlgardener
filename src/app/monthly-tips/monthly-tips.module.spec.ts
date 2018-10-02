import { MonthlyTipsModule } from './monthly-tips.module';

describe('MonthlyTipsModule', () => {
  let monthlyTipsModule: MonthlyTipsModule;

  beforeEach(() => {
    monthlyTipsModule = new MonthlyTipsModule();
  });

  it('should create an instance', () => {
    expect(monthlyTipsModule).toBeTruthy();
  });
});
