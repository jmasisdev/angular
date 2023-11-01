import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { IConfig, provideNgxMask } from 'ngx-mask'
import { IndexComponent } from './app/index/index.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

bootstrapApplication(IndexComponent, {
  providers: [
    provideNgxMask(maskConfig),
  ],
}).catch((err) => console.error(err));

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
function provideEnvironmentNgxMask(): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
  throw new Error('Function not implemented.');
}

