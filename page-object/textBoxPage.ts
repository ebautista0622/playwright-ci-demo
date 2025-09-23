import { Page , Locator} from "@playwright/test";
import { HelperBase } from "./helperBase";

export class TextBoxPage extends HelperBase{
    readonly usernameInput: Locator

    constructor(page : Page){
        super(page)
        this.usernameInput = page.locator('#userName')
    }

    async fillUsername(inputUsername : string){
        await this.usernameInput.fill(inputUsername)
    }
}